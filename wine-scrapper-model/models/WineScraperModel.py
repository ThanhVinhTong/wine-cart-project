from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from tqdm import tqdm

import requests
import time

from tools import SaveImage
from tools import MapInfo


class WineScraper:
    def __init__(self):
        pass

    def scrape_wine_cards(self, driver, wine_url, n):
        wine_urls = []
        wine_names = []
        for page_number in tqdm(range(1, n)):
            driver.get(wine_url.format(page_number))

            wine_cards = driver.find_elements(By.CLASS_NAME, "product-meta")
            for card in wine_cards:
                card = card.find_element(By.CLASS_NAME, "pro-link.pro-review")
                wine_urls.append(card.get_attribute('href'))
                wine_names.append(card.get_attribute("title"))
        return wine_names, wine_urls

    def scrape_wine_info(self, driver, wine_url, wine_name, saved_folder):
        driver.get(wine_url)
        time.sleep(1)
        cols = driver.find_elements(By.CLASS_NAME, 'col-xs-6.col-sm-6.left')
        infos = driver.find_elements(By.CLASS_NAME, 'col-xs-6.col-sm-6.border-left.right.min-height-30')
        if len(cols)-1 != 7:
            return [-1]
        else:
            wine_name = wine_name.lower()
            country, region, producer, wine_type, alcohol_content, volume, grape_variety = MapInfo.find_info(cols, infos)
            vintage = 1980
            image_href = driver.find_element(By.CLASS_NAME, 'thumbnail-product-template').find_element(By.TAG_NAME, 'img').get_attribute('src')
            image_path = SaveImage.save_image_to_folder(image_href, saved_folder)
            return [wine_name, producer, region, country, vintage, wine_type, grape_variety, alcohol_content, volume, image_path]
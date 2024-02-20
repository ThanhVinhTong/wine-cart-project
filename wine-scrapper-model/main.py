import pandas as pd
import time

from drivers import EdgeDriver
from models import WineScraperModel
from tools import CreateFolder

# Output path
saved_root = "wine_data"
saved_image_folder = "wine_data/image"
saved_data_place = 'wine_data/wine_data.csv'

# Initiate variables
urls = pd.read_csv("urls.csv").values.flatten().tolist()
cols = ['appelation', 'producer', 'region', 'country', 'vintage', 'wine_type', 'grape_variety', 'alcohol_content', 'volume', 'image_filename']
df = pd.DataFrame(columns=cols)
max_page_number = 50

# Create output folders
CreateFolder.create_new_folder(saved_root)
saved_folder = CreateFolder.create_new_folder(saved_image_folder)

# Initiate driver
driver = EdgeDriver.initiate()

# Initiate Scraper Model
wineScraperModel = WineScraperModel.WineScraper()
for url in urls:
    wine_names, wine_urls = wineScraperModel.scrape_wine_cards(driver, url, n=max_page_number)

    # Insert values into the dataframe
    for i in range(0, len(wine_urls)):
        temp = wineScraperModel.scrape_wine_info(driver, wine_urls[i], wine_names[i], saved_folder)
        if temp[0] != -1:
            df.loc[i] = temp
        time.sleep(5)
        print(f'Finished looking at item {wine_names[i]}, need some sleep\n...\nOk, Back to Work')

# Store the wine data
df.to_csv(saved_data_place)
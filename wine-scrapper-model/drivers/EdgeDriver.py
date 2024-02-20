from selenium import webdriver
from selenium.webdriver.edge.service import Service

from notification import GeneralNotification

def initiate():
    try:
        edge_options = webdriver.EdgeOptions()
        edge_options.add_argument('--disable-gpu')
        edge_options.add_argument('--headless')
        edge_options.add_argument('--no-sandbox')
        edge_options.add_argument('--disable-dev-shm-usage')
        edge_service = Service(executable_path='edgedriver')
        driver = webdriver.Edge(service=edge_service, options=edge_options)
        GeneralNotification.notify("Create Edge Driver", "success")
        return driver
    except Exception as e:
        GeneralNotification.notify("Create Edge Driver", "failure")
        print("Error creating Edge driver: ", e)
        return None

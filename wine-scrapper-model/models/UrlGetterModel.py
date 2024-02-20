import requests
import time

class UrlGetter:
    def __init__(self):
        pass
    
    @staticmethod
    def get_url(url):
        item = ''
        while item == '':
            try:
                item = requests.get(url)
                break
            except:
                print("Connection refused by the server..")
                print("Let me sleep for 5 seconds")
                print("ZZzzzz...")
                time.sleep(5)
                print("Was a nice sleep, now let me continue...")
                continue
        return item

import os 

from models import UrlGetterModel
from notification import SaveImageNotification

# this is based on the idea of copy image from the internet and then save as a new one in the local. Here we dont need to send a request to the website for permission
def save_image_to_folder(image_href, saved_folder):
    image_filename = len(os.listdir(saved_folder)) + 1
    file_path = f'{saved_folder}/{image_filename}.jpg'
    img_data = UrlGetterModel.UrlGetter().get_url(image_href).content
    with open(file_path, 'wb') as handler:
        handler.write(img_data)
    SaveImageNotification.save_image_notify(image_filename, file_path)
    return file_path
import os 

# create_new_folder
def create_new_folder(folder_name="default_folder"):
    if not os.path.exists(folder_name):
        os.makedirs(folder_name)
        rel_path = os.path.relpath(folder_name)
        print(f"Folder '{folder_name}' created successfully at {rel_path}")
        return rel_path
    else:
        rel_path = os.path.relpath(folder_name)
        print(f"Folder '{folder_name}' already exists at {rel_path}")
        return rel_path
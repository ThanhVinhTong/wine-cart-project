import subprocess

# List all the required libraries
required_libraries = [
    'numpy',
    'pandas',
    'selenium',
    'requests',
    'googletrans',
    'tqdm'
]

# Loop through the list and install each library
for library in required_libraries:
    subprocess.check_call(['pip', 'install', library])

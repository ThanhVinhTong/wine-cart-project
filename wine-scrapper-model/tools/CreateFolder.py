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
// automation-note [2026-03-14T14:09:42.548298]
// Add note to cover empty, short, and unicode password edge cases.

// automation-note [2026-03-14T14:09:57.841812]
// Revert note for merged PR #3; cleanup after automation demonstration.

// automation-note [2026-03-14T14:10:14.524785]
// Add note for profile settings validation test scenarios.

// automation-note [2026-03-14T14:10:29.947007]
// Revert note for merged PR #6; cleanup after automation demonstration.

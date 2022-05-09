import {message, danger} from "danger"

const newFiles = danger.git.created_files;
const modifiedFiles = danger.git.modified_files;
const deletedFiles = danger.git.deleted_files;

if (newFiles && newFiles.length > 0) {
    message("New Files in this PR: \n - " + newFiles.join("- "));
} else {
    message("No New Files in this PR.\n");   
}

if (modifiedFiles && modifiedFiles.length > 0) {
    modifiedFiles.forEach(value => {
        message(value + "\n");
    });
} else {
    message("No files were modified in this PR.");
}

if (deletedFiles && deletedFiles.length > 0) {
    deletedFiles.forEach(value => {
        message(value + "\n");
    });
} else {
    message("No files were deleted in this PR.");
}
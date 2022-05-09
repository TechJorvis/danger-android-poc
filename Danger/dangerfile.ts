import {message, danger} from "danger"

const newFiles = danger.git.created_files;

if (newFiles && newFiles.length > 0) {
    message("New Files in this PR: \n - " + newFiles..join("- "));
} else {
    message("No New Files in this PR: \n");   
}


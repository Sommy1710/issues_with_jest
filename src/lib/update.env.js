import fs from 'fs';
//here we import a nodejs file system module that can interact with the file system

function updateEnvValue(Key, newValue)
//we define a function that takes two parameters kew and newvalue 
{
    let content = fs.readFileSync('.env', 'utf8');
    //here we read contents of the env file using fs.fileSync the file is read in utf-8. then we store it in the content variable
    content = content.replace(`${Key} = *`, `${Key} = ${newValue}`);
    //here we replace the old value of the key with a new value
    fs.writeFileSync('.env', content);
    //this line now writes the updated content back to the env file
}

export default updateEnvValue;


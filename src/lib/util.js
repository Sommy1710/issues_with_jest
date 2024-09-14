import {readFileSync, writeFileSync} from 'fs';
import {resolve} from 'path';

export const updateEnv = (payload) =>
{
    const envPath = resolve(process.cwd(), '.env');
    const envVariables = readFileSync(envPath, 'utf8').dplit('\n');

    //loop over the object we are reciving as a parameter

    for (const[key, value] of Object.entries(payload))
    {
        //write a regex to match the key and replace the value
        const regex = new RegExp(`${key}=*`);

        // check the env variables for the existence of the key
        const keyExists = envVariables.some((envVar) => regex.test(envVar));

        //if the key exists, update the value
        if (keyExists)
        {
            envVariables.forEach((envVar, index) =>
            {
                if (regex.test(envVar))
                {
                    envVariables[index] = `${key}=${value}`;
                }
            });
        }
        else
        {
            //if the key does not exist, push the new key value pair

            envVariables.push(`${key}=${value}`);
        }

        //write the updated env variable to the .env file
        writeFileSync(envPath, envVariables.join('\n'))
    }
}

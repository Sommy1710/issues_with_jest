import {updateEnv} from "../../lib/utils.js";
import {config} from "dotenv";

beforeEach(() =>
{
    config();
});

test('it updates the environmrntal variables', () =>
{
    updateEnv({NODE_ENV: "test"})
    expect(process.env.NODE_ENV).toBe("test");
});

afterEach(() =>
{
    updateEnv({NODE_ENV: 'development'});
});

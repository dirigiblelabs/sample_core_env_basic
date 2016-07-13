/* globals $ */
/* eslint-env node, dirigible */

var env = require('core/env');
var response = require('net/http/response');

var os = env.get("os.name");
response.println("[OS]: " + os);
response.println("[OS Name]: " + env.getOperatingSystemName());
response.println("[OS Arch]: " + env.getOperatingSystemArchitecture());
response.println("[OS Version]: " + env.getOperatingSystemVersion());
response.println("[File Separator]: " + env.getFileSeparator());
response.println("[Path Seprator]: " + env.getPathSeparator());
response.println("[Line Seprator]: " + env.getLineSeparator());
response.println("[User Dir]: " + env.getUserDirectory());
response.println("[User Home]: " + env.getUserHome());
response.println("[User Name]: " + env.getUserName());

response.println("[All]: " + env.getAll());

response.flush();
response.close();
# Node Backend Boilerplate
Includes typescript, unit tests (mocha), mongodb, express framework.

## Development

### Debug in Visual Studio Code
Put in your
```json
{
    "name": "Docker: Attach to Node",
    "type": "node",
    "request": "attach",
    "port": 5858,
    "address": "localhost",
    "localRoot": "${workspaceFolder}",
    "remoteRoot": "/usr/src/app",
    "protocol": "auto",
    "restart": true
}
```

## Dependencies
- Docker
## Tests
### Unit
```bash
npm run build:test 
npm test
```
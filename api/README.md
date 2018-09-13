# API

Note:

> The API store the changes in memory, restarting the API server will wipe all changes.

## Run the API
In the `/api` folder run:
```sh
npm install
npm start
```

API is now running at `http://localhost:3000`

## Expenses API

### Listing expenses

```
GET /expenses
```

#### Query parameters:
- `limit`: number of expenses to fetch.
- `offset`: number of expenses to skip, for pagination.

Example:

```
GET /expenses?limit=25&offset=25
```
This query gets the second page of 25 expenses.

#### Updating an expense
```
POST /expenses/:id
```
#### Path parameters:
- `id`: The id of the expense to update

#### Body parameters:
- `comment`: The comment to set on an expense


### Uploading a receipt to an expense
```
POST /expenses/:id/receipts
```
#### Form parameters:
- `receipt`: The file to add to the expense

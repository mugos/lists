# Endpoints

## GET: /lists/<tenant>
Index

| Filters           | Type      | Desc                      |
| -----             | -----     | -----                     |
| fields[user]      | `Integer` | User id                   |
| fields[category]  | `String`  | Category                  |
| fields[official]  | `Boolean` | If it is a official list  |
| page[size]        | `Integer` | Size of the payload       |
| page[number]      | `Integer` | Number of the payload     |

```
  {
    lists: [
      {
        id: Integer,
        name: String,
        img: Text,
        slug: String,
        total_items: Integer,
        count_items: Integer
      }
    ]
  }
```

## GET: /lists/<tenant>/<id>
Show

| Filters           | Type      | Desc                      |
| -----             | -----     | -----                     |
| fields[user]      | `Integer` | User id                   |
| fields[category]  | `String`  | Category                  |
| fields[official]  | `Boolean` | If it is a official list  |
| page[size]        | `Integer` | Size of the payload       |
| page[number]      | `Integer` | Number of the payload     |

```
  {
    list: {
      id: Integer,
      name: String,
      img: Text,
      slug: String,
      count_items: Integer,
      total_items: Integer,
      desc: Text,
      price: String,
      products: [
        { id: 1, qty: 7 },
        { id: 2, qty: 2 },
        { id: 3, qty: 1 }
      ]
    }
  }
```

## DELETE: /lists/<tenant>/<id>
Delete

## POST: /lists/<tenant>
Create

```
  {
    list: {
      name: String,
      official: Boolean,
      img: Text,
      slug: String,
      count_items: Integer,
      total_items: Integer,
      desc: Text,
      price: String,
      user: <id>,
      products: [
        { id: 1, qty: 7 },
        { id: 2, qty: 2 },
        { id: 3, qty: 1 }
      ]
    }
  }
```


## PUT: /lists/<tenant>/<id>
Update

```
  {
    list: {
      name: String,
      official: Boolean,
      img: Text,
      slug: String,
      count_items: Integer,
      total_items: Integer,
      desc: Text,
      price: String,
      user: <id>,
      products: [
        { id: 1, qty: 7 },
        { id: 2, qty: 2 },
        { id: 3, qty: 1 }
      ]
    }
  }
```


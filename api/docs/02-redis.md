# Redis Structure

## Tenants
Will be separeted as a initilial namespace into the keys. Ex: `veran:`

## Lists

### Lists index
* Key: `{tenant}:lists:index`
    * `tenant` - The tenant slug
* Description: Will store the current index of the lists
* Default: 0

### List information (Hash)
* Key: `{tenant}:list:{id}`
    * `tenant` - The tenant slug
    * `id` - The list index
* Description: Place where basic information about the list will be stored
* Struct:

| Field         | Type      | Desc                       |
| -----         | ----      | ----                       |
| `id`          | `integer` | ID                         |
| `name`        | `string`  | Name                       |
| `official`    | `integer` | If is official or not      |
| `img`         | `string`  | Img url                    |
| `slug`        | `string`  | Uniq Slug                  |
| `count_items` | `integer` | Count Items                |
| `total_items` | `integer` | Count Items + Products Qty |
| `desc`        | `string`  | Description                |
| `price`       | `string`  | Price                      |

### List products (Set)
* Key: `{tenant}:list:{id}:products`
    * `tenant` - The tenant slug
    * `id` - The list index
* Description: Place where basic information about the list will be stored
* Struct:

| Field  | Type      | Desc             |
| ------ | --------  | ---------------- |
| `id`   | `Integer` | External Id      |
| `name` | `string`  | List name        |
| `qty`  | `Integer` | Qty              |
| `slug` | `string`  | List slug        |
| `desc` | `string`  | List Description |

### List Starting date (Sorted Set)
* Key: `{tenant}:lists:starts`
  * `tenant` - The tenant slug
* Description: Place where the starting date of the lists will live.
* Struct:
  * **Score** a timestamp
  * **Member** the list `id`

### List Ending date (Sorted Set)
* Key: `{tenant}:lists:ends`
    * `tenant` - The tenant slug
* Description: Place where the ending date of the lists will live.
* Struct:
    * **Score** a timestamp
    * **Member** the list `id`

### Lists categories
* Key: `{tenant}:lists:1`
    * `tenant` - The tenant slug
* Description: Place where the categories the lists will live.
* Struct:
    * **Score** a timestamp
    * **Member** the list `id`

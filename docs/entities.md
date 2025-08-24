#### 1. Entity: `Media`

This table holds the metadata about the work itself.

- **`content_id`** (Primary Key): A unique identifier (e.g., UUID).

- **`title`** (String): The title of the work. _Required._

- **`type`** (Enum): The format of the content. Crucial for filtering and UI presentation.

    - Values: `Book`, `Audiobook`, `eBook`, `Podcast`, `Scientific Article`, `Blog Post`, `Short Story`, `Essay`, `Other`

- **`author`** (String): The primary author, host, or creator.

- **`authors`** (Array of Strings): _Optional, but recommended._ To handle multiple authors or editors.

- **`description`** (Text): A synopsis or abstract.

- **`genre`** (Array of Strings): User-defined or selected from a list. e.g., `["Sci-Fi", "Adventure"]`.

- **`tags`** (Array of Strings): User-defined keywords for personal organization. e.g., `["space-opera", "desert-planet"]`.

- **`language`** (String): The primary language of the content (e.g., "English", "Portuguese").

- **`publisher`** (String): _Optional._ Publishing company or network.

- **`published_date`** (Date): _Optional._ The original publication date.

- **`isbn`** (String): _Optional._ For books.

- **`url`** (String): _Optional._ Link to the article, podcast show, etc.

- **`page_count`** (Integer): _Optional._ For written content.

- **`duration`** (Integer): _Optional._ Length in minutes for audio/video content.

- **`cover_image_url`** (String): _Optional._ Link to a cover image.


#### 2. Entity: `ReadingSession`

This table logs each time a user engages with a piece of Media.

- **`reading_id`** (Primary Key): A unique identifier.

- **`content_id`** (Foreign Key): Links to the `Media` table. _Required._

- **`user_id`** (Foreign Key): Links to the User table (assuming multiple users in the future). _Required._

- **`status`** (Enum): The current state of _this specific reading_.

    - Values: `Want to Read`, `Reading`, `Finished`, `Paused`, `Abandoned`

- **`date_started`** (DateTime): _Optional._ When the user started this session.

- **`date_finished`** (DateTime): _Optional._ When the user finished this session.

- **`current_page`** / **`progress`** (Integer/Float): To track progress for the "Reading" status. Could be a page number or a percentage (0.0 to 1.0).

- **`rating`** (Integer): _Optional._ User's rating for _this read_ (e.g., 1-5 stars). Allows a rating to change between reads.

- **`notes`** (Text): _Optional._ User's personal notes and reflections for this specific reading.

- **`format`** (Enum): _Optional._ The format of _this particular consumption_.

    - Values: `Physical`, `Digital`, `Audio`

    - _Why? A user might read a physical book first (`Format: Physical`) and later listen to the audiobook (`Format: Audio`). Both are readings of the same `Media`._
- 
### `Shelf` (or `Collection`)

This table stores the definition of a custom, dynamic shelf.

- **`shelf_id`** (Primary Key): A unique identifier.

- **`user_id`** (Foreign Key): Links to the User. Shelves are user-specific.

- **`name`** (String): The user-defined name for the shelf (e.g., "Latin American Women Authors", "To-Read Shortlist", "2024 Science Reads").

- **`description`** (Text): _Optional._ A user-provided description of what the shelf represents.

- **`is_public`** (Boolean): _Optional, for future social features._ If `true`, other users might be able to see this shelf.

- **`icon`** / **`color`** (String): _Optional._ For UI personalization.


### New Entity: `ShelfRule`

This is the core of the dynamic shelf. Each rule is a single condition. A shelf can have multiple rules, which are combined with **AND** or **OR** logic. For simplicity starting out, I'd recommend using **AND** (all rules must be true for content to appear on the shelf).

- **`rule_id`** (Primary Key): A unique identifier.

- **`shelf_id`** (Foreign Key): Links to the parent Shelf.

- **`field`** (Enum): Which field of the `Media` or `ReadingSession` to check.

    - Values: `content.author`, `content.genre`, `content.language`, `content.type`, `reading_session.status`, `reading_session.date_finished` (year), etc.

- **`operator`** (Enum): The type of comparison.

    - Values: `is`, `is not`, `contains`, `does not contain`, `is in the last`, `is before`, `is after`, `is greater than`

- **`value`** (String): The value to compare against.

    - Examples: For `field: content.genre`, `operator: is`, `value: "Magical Realism"`. For `field: reading_session.date_finished`, `operator: is in the last`, `value: "365"` (days).


**Example Shelf: "Unread Latin American Fiction"**  
This shelf would be built from these rules:

1. `(reading_session.status IS NOT "Finished")`

2. `(content.genre CONTAINS "Fiction")`

3. `(content.country IS IN ["Argentina", "Brazil", "Mexico", ...])` // Assuming you add a `country` field to Media
# Brainshelf

**Brainshelf** is a **personalized reading organizer** designed for reading lovers who want to **track, analyze, and reflect** on their reading journey.
## Requirements

### Functional

####  For Managing Content
- As a user, I can add a new Content item to my library by manually entering its details (title, author, etc.) so that I can track it.
- As a user, I can search for Content by title, author, or ISBN using an external API (like Google Books, OpenLibrary) to auto-populate metadata and save time.
- As a user, I can view a detailed page for any Content in my library, seeing all its metadata.
- As a user, I can edit the metadata of a Content item (e.g., fix a typo in the title, add a genre).
- As a user, I can delete a Content item from my library (with a confirmation warning that all associated Reading Sessions will also be deleted).
- As a user I can save some content as favorite

#### Managing Dynamic Shelves
- As a user, I can create a new custom shelf by giving it a name and defining a set of rules.
- As a user, I can edit the rules of an existing custom shelf (e.g., change "Fiction" to "Non-Fiction"). 
- As a user, I can delete a custom shelf.
- As a user, I can view a list of all my custom shelves. 
- As a user, when I view a custom shelf, I see a dynamically updated list of all Content that currently matches its rules. 
- As a user, I can view the rules of a shelf to understand why a certain piece of content is (or isn't) included.

#### Enhanced Filtering & Discovery
- As a user, I can save my current filter view (e.g., after searching for genre:Biography and rating:5) as a new custom shelf named "Top-Rated Biographies" with one click.

#### For Managing ReadingSessions
- As a user, I can start a new Reading Session for any Content in my library.
- As a user, I can update the status of an active Reading Session (e.g., from "Reading" to "Finished").
- As a user, I can log the start and finish dates for a Reading Session, either manually or automatically (e.g., the app sets date_finished when I mark it as "Finished").
- As a user, I can update my current progress (page number or percentage) within an active "Reading" session.
- As a user, I can add a rating and personal notes to a Reading Session.
- As a user, I can view a history of all my Reading Sessions for a specific piece of Content (e.g., see that I read "Metamorphose" twice, once in 2018 and again in 2023).
- As a user, I can add tags for each reading session
- As a user, I can add tags for each note
- As a user, I can view all readings and contents filtered by common tag

####  For Analysis & Discovery (The "Brainshelf" Value-Add)
- As a user, I can view a dashboard that shows my reading statistics:
  - Books read per month/year.
  - Total reading time (calculated from date_started and date_finished).
  - Breakdown by Genre, Author, or Content Type.
  - Average rating over time.

- As a user, I can filter and search my library based on any metadata (Content) or status (Reading Session):
  - "Show all Brazilian authors I've read." (Filters Content by country, joins Reading Sessions with status 'Finished')
  - "Show all Scientific Articles I want to read." (Filters Content by type, joins Reading Sessions with status 'Want to Read')
  - "What Fantasy books did I read in 2023?" (Filters Content by genre, joins Reading Sessions finished in 2023)

- As a user, I can export my library and reading history (e.g., to a CSV or JSON file) for my own records or analysis.

### Non-functional
- The system shall be usable in mobile devices
- The system shall have a backup of the database
- The system shall encrypt sensitive data

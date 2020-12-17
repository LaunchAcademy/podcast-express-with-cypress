# Welcome to Podcast Express, your one stop shop for all of the coolest podcasts. We'll need to utilize your web development skills to help prepare the site for our new users!

## Core User Stories

### Part 1

```no-highlight
As a podcast listener
I want to see a list of podcasts
So I can browse for my mood
```

Acceptance Criteria:

- When I visit `/`, I am redirected to `/podcasts`"
- Visiting `/podcasts` displays an unordered list of podcasts by title
- The list of podcasts is read in from the provided `podcasts.json` file
- There should be a link to navigate to the `/podcasts/new` page

### Part 2

```no-highlight
As a Podcast Creator
I want to add my Podcast
So that I can make it big!
```

Acceptance Criteria:

- When visiting `/podcasts/new` I see a form to add a new podcast
- A user must supply a `title`
- `network` and `description` are optional and should default to `NA` if not supplied.
- Submitting correctly filled out form persists the podcast to `podcasts.json` and redirect the user to `/podcasts` where the newly added podcast is now displayed.
- Trying to submit an incorrectly filled out form should keep the user on the form page.

### Part 3

```no-highlight
As a curious listener
I want to view more details about the podcasts
So that I can learn more about them
```

Acceptance Criteria:

- When I visit `/podcasts/:name` I should see the title, description and network for the correct podcast
- If the podcast isn't found, the response status should return a `404` and "Not found"
- Update the index page so that the Podcast title's are links to the show page

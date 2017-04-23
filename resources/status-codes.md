• 200 - Generic everything is OK
• 201 - Created something OK
• 202 - Accepted but is being processed async (for a video means encoding, for an image means resizing, etc.)
• 400 - Bad Request (should really be for invalid syntax, but some folks use for validation)
• 401 - Unauthorized (no current user and there should be)
• 403 - The current user is forbidden from accessing this data
• 404 - That URL is not a valid route, or the item resource does not exist
• 405 - Method Not Allowed (your framework will probably do this for you)
• 410 - Data has been deleted, deactivated, suspended, etc.
• 500 - Something unexpected happened, and it is the APIs fault
• 503 - API is not here right now, please try again later
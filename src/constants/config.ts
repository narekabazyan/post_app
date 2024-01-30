/**
 * The debounce delay (in milliseconds) commonly used as a starting point for debouncing user input.
 */
export const TypingDelay = 300;

/**
 * The number of users per page in pagination.
 * Set to 12 to match the display of responsive user cards without empty spaces.
 */
export const UsersQueryOffset = 12;

export const InitialPage = 0;

/**
 * The API URL is typically stored in an environment file, but it's excluded here
 * to prevent committing sensitive information, such as environment variables, to source control.
 */
export const BaseURL = 'http://localhost:8083/';

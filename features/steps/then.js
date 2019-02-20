const { Then } = require('cucumber');
const { checkTitle, isVisible } = require('../support/actions');

Then('I expect that the title is {string}', checkTitle);

Then(/the element "([^"]*)" is( not)? visible/, isVisible);
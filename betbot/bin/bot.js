#!/usr/bin/env node

'use strict';

/**
 * BetBot launcher script.
 *
 * @author David Hultengren <david.hultengren@gmail.com>
 */

var BetBot = require('../lib/betbot');

/**
 * Environment variables used to configure the bot:
 *
 *  BOT_API_KEY : the authentication token to allow the bot to connect to your slack organization. You can get your
 *      token at the following url: https://<yourorganization>.slack.com/services/new/bot (Mandatory)
 *  BOT_DB_PATH: the path of the SQLite database used by the bot, optional. Will default to data\betbot.db if not specified
 *  BOT_NAME: the username you want to give to the bot within your organisation.
 *  AdminId: the slack Id of the user with admin rights
 */

var token = 'secret token provided by slack';
var dbPath = process.env.BOT_DB_PATH;
var name = process.env.BOT_NAME;
var adminId = 'slack user id of admin';

var betbot = new BetBot({
    token: token,
    dbPath: dbPath,
    name: name,
	adminId: adminId
});

betbot.run();

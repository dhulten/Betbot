# Betbot
Custom slack bot that allows users to wager points against each other.

This is based larely on this guide: https://scotch.io/tutorials/building-a-slack-bot-with-node-js-and-chuck-norris-super-powers

Numerous improvements are on the Todo list:

 * Refactor semi-redundant code by developing async methods to return needed values (such as getBetById, getUserById, getUserByName)
 * Refactor admin commands to be formatted more similarly to user commands. Ideally they would be more like natural language.
 * Add optional paramter to listbets command for user to specify the number of bets they wish to show (current default = 20)
 * Add function to return userId sql search query based on message sender
 * Add logic to handle different odds for bets
 * Enhance the range of automated snarky responses if non-admins make admin requests
 * Allow bot to respond in private channels
 
I don't have much experience with Javascript, and this was my first time doing anything with nodejs, so there's definitely some refinement that could be made to this code. It was a fun learning experience to put together.

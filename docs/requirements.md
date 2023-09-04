# Game

## RF - (Functional)
- [x] Users should be able to create a room.
- [x] A room should have a unique short code.
- [ ] Users should be able to share a room using the code or link
- [ ] A room should be removed after 2 hours of inactivity
- [ ] Users should be able to mark a spot each turn.
- [ ] Users shouldn't be able to mark an already marked spot.
- [ ] Users with 'X' go first.
- [ ] Keep a count of wins.
- [ ] Users should be able to reset the win count.

# RNF - (Non functional)
- [ ] Should support multiplayer.
- [ ]

# RN - (Business Rules)
- [x] The room code should be 6 characters lenght and be composed of letters and numbers.
- [ ] When everyone leaves a room, we set a CRON job to remove the room after 2 hours. If someone enters the room in this time frame we delete the CRON job.

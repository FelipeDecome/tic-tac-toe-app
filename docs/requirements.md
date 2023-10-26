# Game

## RF - (Functional)

#### Rooms
- Entities: User, Room, Session.

- [x] Users should be able to create a room.
- [x] A room should have a unique short code.
- [ ] When a user connects we create a session.
- [ ] When a user disconnects we delete the session and save the date on the rooms table.
- [ ] A room should be removed after 2 hours of inactivity
- [ ] Keep a count of wins.
- [ ] Users should be able to reset the win count.

#### Games
- Entities: Player, Game, Board, Cell, Match

- [ ] Players should be able to start a game.
- [ ] Players should be able to play against an AI.

#### Users
- Entities: User

- [ ] Users should be able to sign up.
- [ ] Users should be able to sign in.
- [ ] Users should be able to sign out.
- [ ] Users should be able to list their active rooms.
- [ ] Users should be able to share a room using a code or link.

# RNF - (Non functional)
- [ ] Should support multiplayer.
- [ ] Socket IO to connect to rooms.
- [ ] Use keycloack for authentication.
- [ ] Users should be able to sign in with google and create an account.

# RN - (Business Rules)

#### Rooms
- [x] The room code should be 6 characters lenght and be composed of letters and numbers.
- [ ] The session is a key-value register on Redis.
- [ ] Every 2 minutes we check if the actives rooms should be removed. They should be removed if there isn't any active sessions and the last active session has more than 2 hours.

#### Games
- [ ] Players should be able to mark a spot each turn.
- [ ] Players shouldn't be able to mark an already marked spot.
- [ ] Players with 'X' go first.

#### Users
- [ ] Should define an username with at least 8 characters.
- [ ] The password must have at least 8 characters, and be composed of chars, numbers and symbols.

List of future features:



IN PROGRESS: 
-add Queue feature. 


NEW FEATURES: 
-Add in other animals to change API Artwork. Ie Dog, Fox, bird, etc

-add trackSource property to selectedTrack redux state. this way when you play a track and click next, it will play the next track in whatever component youre listening to. ie liked tracks, all tracks etc. 

-Add search feature.

-Create playlists

-Organise by Artist

-Organize by genre

-Add play button in indTrack component so user can play tracks from tracklist

-Add shuffle option when user clicks next. 

-implement upload song functionality
 > create track history so after shuffle user can hit back and hear the previous track. 

-Make player responsive on mobile


THINGS TO REFACTOR/ IMPROVE: 

*- sorting tracks alphabetically/ vertically should change them in the redux store. The tracklist and sorting need to be centralized all in one place so that all my toNext / queued track functions can use the same source. 

-Test all Db functions

-Test all Routes

-When track is liked, use array.splice? to reload only selected track. 

-Re write GET / POST routes to be cleaner

DONE FEATURES: 

-fix clicking next functionality
-add button to clear all tracks from queue
-Re order tracks alphabetically





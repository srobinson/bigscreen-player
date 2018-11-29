/**
 * @fileOverview Requirejs module containing base class for device
 * modifiers for media playback
 * @preserve Copyright (c) 2013-present British Broadcasting Corporation. All rights reserved.
 * @license See https://github.com/bbc/tal/blob/master/LICENSE for full licence
 */

define(
    'bigscreenplayer/playbackstrategy/modifiers/mediaplayerbase',
    function () {
      return {

        STATE: {
          EMPTY: 'EMPTY',     // No source set
          STOPPED: 'STOPPED',   // Source set but no playback
          BUFFERING: 'BUFFERING', // Not enough data to play, waiting to download more
          PLAYING: 'PLAYING',   // Media is playing
          PAUSED: 'PAUSED',    // Media is paused
          COMPLETE: 'COMPLETE',  // Media has reached its end point
          ERROR: 'ERROR'      // An error occurred
        }

      };
    }
);

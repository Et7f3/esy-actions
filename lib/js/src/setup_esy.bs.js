// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Core = require("@actions/core");
var Exec = require("@actions/exec");

const tool_cache = require("@actions/tool-cache");
const core = require("@actions/core");
const io = require("@actions/io");
const github = require("@actions/github");
;

var Exec$1 = /* module */[];

function getInput(env, $staropt$star) {
  var required = $staropt$star !== undefined ? $staropt$star : false;
  return Core.getInput(env, {
              required: required
            });
}

var Core$1 = /* module */[/* getInput */getInput];
(async () => {
  let a = await Exec.exec("npm install -g esy", undefined);
  console.log(a);
})();

exports.Exec = Exec$1;
exports.Core = Core$1;
/*  Not a pure module */

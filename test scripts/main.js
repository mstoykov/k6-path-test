import { Counter } from "k6/metrics";
import { check } from "k6";
import b from "./b.js";
import c from "./c/c.js";
import g from "./g.js";

let myFailCount = new Counter("failed checks");

export let options = {
        thresholds: {
                "failed checks": ["count<0"],
              },
};

export default function() {
    check(c.updateC(), {"first c.updateC is 2":(s)=> s == 2}) || myFailCount.add(1);
    check(c.updateC(), {"second c.updateC is 3":(s)=> s == 3}) || myFailCount.add(1);
    check(g.updateC(), {"first g.updateC is 1":(s)=> s == 1}) || myFailCount.add(1);
    check(g.updateC(), {"second g.updateC is 2":(s)=> s == 2}) || myFailCount.add(1);
    check(g.updateCHttps(), {"first g.updateCHttps is 1":(s)=> s == 1}) || myFailCount.add(1);
    check(g.updateCHttps(), {"second g.updateCHttps is 2":(s)=> s == 2}) || myFailCount.add(1);
    check(g.updateCSchemeless(), {"first g.updateCSchemeless is 1":(s)=> s == 1}) || myFailCount.add(1);
    check(g.updateCSchemeless(), {"second g.updateCSchemeless is 2":(s)=> s == 2}) || myFailCount.add(1);
}

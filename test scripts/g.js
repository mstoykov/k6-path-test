import c from "github.com/MStoykov/k6-path-test/test scripts/c/c.js";
import cHttps from "https://raw.githubusercontent.com/MStoykov/k6-path-test/master/test scripts/c/c.js";
import cSchemeless from "raw.githubusercontent.com/MStoykov/k6-path-test/master/test scripts/c/c.js";

export default {
    updateC: c.updateC,
    updateCHttps: cHttps.updateC,
    updateCSchemeless: cSchemeless.updateC,
}

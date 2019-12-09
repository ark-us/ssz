const {initSha256, sha256} = require("../src");
const assert = require("assert");
const {expect} = require("chai");

describe("sha256", function () {

    it("throws if not inited", function () {
        expect(() => sha256(new Uint8Array(23))).to.throw;
    });

    describe("default sha256 method", function () {

        before(async function () {
            await initSha256();
        });

        it('abc', function () {
            const input = Buffer.from("abc", "utf8");
            assert(Buffer.from(sha256(input)).toString("hex") === "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad")
        });

        it('empty string', function () {
            const input = Buffer.from("", "utf8");
            assert(Buffer.from(sha256(input)).toString("hex") === "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855")
        });

        it('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq', function () {
            const input = Buffer.from("abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq", "utf8");
            assert(Buffer.from(sha256(input)).toString("hex") === "248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1")
        });

        it('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu', function () {
            const input = Buffer.from("abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu", "utf8");
            assert(Buffer.from(sha256(input)).toString("hex") === "cf5b16a778af8380036ce59e7b0492370b249b11e8f07a51afac45037afee9d1")
        })
    })

});
const fs = require("fs");
const path = require("path");

const originalRealpathSync = fs.realpathSync.bind(fs);
const originalRealpath = fs.realpath.bind(fs);
const originalNativeSync = fs.realpathSync.native
  ? fs.realpathSync.native.bind(fs.realpathSync)
  : null;
const originalNative = fs.realpath.native
  ? fs.realpath.native.bind(fs.realpath)
  : null;

function fallbackPath(input) {
  if (typeof input !== "string") return input;
  try {
    return path.resolve(input);
  } catch {
    return input;
  }
}

function shouldFallback(error) {
  return error && (error.code === "EPERM" || error.code === "ENOENT");
}

fs.realpathSync = function patchedRealpathSync(input, options) {
  try {
    return originalRealpathSync(input, options);
  } catch (error) {
    if (shouldFallback(error)) return fallbackPath(input);
    throw error;
  }
};

fs.realpathSync.native = function patchedRealpathSyncNative(input, options) {
  try {
    return originalNativeSync ? originalNativeSync(input, options) : originalRealpathSync(input, options);
  } catch (error) {
    if (shouldFallback(error)) return fallbackPath(input);
    throw error;
  }
};

fs.realpath = function patchedRealpath(input, options, callback) {
  let cb = callback;
  let opts = options;
  if (typeof options === "function") {
    cb = options;
    opts = undefined;
  }
  return originalRealpath(input, opts, (error, resolvedPath) => {
    if (shouldFallback(error)) return cb(null, fallbackPath(input));
    return cb(error, resolvedPath);
  });
};

fs.realpath.native = function patchedRealpathNative(input, options, callback) {
  let cb = callback;
  let opts = options;
  if (typeof options === "function") {
    cb = options;
    opts = undefined;
  }
  const impl = originalNative || originalRealpath;
  return impl(input, opts, (error, resolvedPath) => {
    if (shouldFallback(error)) return cb(null, fallbackPath(input));
    return cb(error, resolvedPath);
  });
};

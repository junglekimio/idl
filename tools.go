//go:build tools
// +build tools

// This file imports packages that are used when running go generate, or used
// during the development process but not otherwise depended on by built code.
//
// @see https://github.com/golang/go/wiki/Modules#how-can-i-track-tool-dependencies-for-a-module

package tools

import (
	_ "google.golang.org/grpc/cmd/protoc-gen-go-grpc"
	_ "google.golang.org/protobuf/cmd/protoc-gen-go"
)

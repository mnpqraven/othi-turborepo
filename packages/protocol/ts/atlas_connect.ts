// @generated by protoc-gen-connect-es v1.5.0 with parameter "target=ts,import_extension=.ts"
// @generated from file atlas.proto (package dm.atlas, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { SignatureReturn, SignatureReturns } from "./atlas_pb.ts";
import { CharId } from "./shared_pb.ts";

/**
 * @generated from service dm.atlas.SignatureAtlasService
 */
export const SignatureAtlasService = {
  typeName: "dm.atlas.SignatureAtlasService",
  methods: {
    /**
     * @generated from rpc dm.atlas.SignatureAtlasService.List
     */
    list: {
      name: "List",
      I: Empty,
      O: SignatureReturns,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc dm.atlas.SignatureAtlasService.ByCharId
     */
    byCharId: {
      name: "ByCharId",
      I: CharId,
      O: SignatureReturn,
      kind: MethodKind.Unary,
    },
  }
} as const;


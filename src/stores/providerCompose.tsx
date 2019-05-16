import React from "react";
import { ConnectionContext, RoomProvider } from "./index";

interface PCProps {
  contexts: React.ReactElement[];
  children: React.FC;
}

function ProviderComposer({ contexts, children }: PCProps) {
  return contexts.reduceRight(
    (kids, parent) => React.cloneElement(parent, { children: kids }),
    children
  );
}

export function ContextProvider(props: any) {
  return (
    <ProviderComposer contexts={[<ConnectionContext />, <RoomProvider />]}>
      {props.children}
    </ProviderComposer>
  );
}

import type { LoaderArgs } from "@remix-run/node"
import { authenticator } from '~/services/auth.server';

export let loader = ({ request, params }: LoaderArgs) => {
  console.log("params", params);
  return authenticator.authenticate(params.provider!, request, {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  });
};
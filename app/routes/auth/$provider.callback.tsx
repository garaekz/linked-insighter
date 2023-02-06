import type { LoaderArgs } from "@remix-run/node"
import { authenticator } from '~/services/auth.server';

export const loader = ({ request, params }: LoaderArgs) => {
  return authenticator.authenticate(params.provider!, request, {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  });
};
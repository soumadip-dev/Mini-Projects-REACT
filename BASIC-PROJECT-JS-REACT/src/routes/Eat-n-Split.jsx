import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/Eat-n-Split')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/Eat-n-Split"ddfdfd!</div>;
}

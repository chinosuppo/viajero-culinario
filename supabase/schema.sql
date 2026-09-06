-- Viajero Culinario: tablas de favoritos e historial por usuario.
-- Ejecutar en Supabase: Dashboard → SQL Editor → New query → pegar y correr.

create table public.favoritos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  recipe_id text not null,
  country_id text not null,
  pais text not null,
  bandera text,
  nombre text not null,
  tipo text not null,
  accesibilidad text not null,
  fecha timestamptz not null default now(),
  unique (user_id, recipe_id)
);

create table public.historial (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  recipe_id text not null,
  country_id text not null,
  pais text not null,
  bandera text,
  continente text not null,
  nombre text not null,
  tipo text not null,
  accesibilidad text not null,
  fecha timestamptz not null default now()
);

alter table public.favoritos enable row level security;
alter table public.historial enable row level security;

-- Cada usuario solo puede ver/crear/borrar sus propias filas.
create policy "usuarios ven sus favoritos"
  on public.favoritos for select
  using (auth.uid() = user_id);

create policy "usuarios insertan sus favoritos"
  on public.favoritos for insert
  with check (auth.uid() = user_id);

create policy "usuarios borran sus favoritos"
  on public.favoritos for delete
  using (auth.uid() = user_id);

create policy "usuarios ven su historial"
  on public.historial for select
  using (auth.uid() = user_id);

create policy "usuarios insertan su historial"
  on public.historial for insert
  with check (auth.uid() = user_id);

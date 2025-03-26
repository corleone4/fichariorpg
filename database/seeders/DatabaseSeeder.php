<?php

namespace Database\Seeders;

use App\Models\CharacterClass;
use App\Models\CharacterOrigins;
use App\Models\CharacterRaces;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'luan@teste.com'],
            ['name' => 'Luan Henrique', 'email' => 'luan@teste.com', 'password' => '123']
        );
        User::firstOrCreate(
            ['email' => 'luan@a.com'],
            ['name' => 'Luan Teste', 'email' => 'luan@a.com', 'password' => '123']
        );
        CharacterClass::firstOrCreate(
            ['name' => 'Nobre'],
            ['name' => 'Nobre', 'description' => 'Nobreza', 'modifiers' => '+2']
        );
        CharacterRaces::firstOrCreate(
            ['name' => 'Humano'],
            ['name' => 'Humano', 'description' => 'Ser Humano', 'modifiers' => '+2']
        );
        CharacterOrigins::firstOrCreate(
            ['name' => 'Amnésico'],
            ['name' => 'Amnésico', 'description' => 'Amnésico', 'modifiers' => '+2']
        );
    }
}

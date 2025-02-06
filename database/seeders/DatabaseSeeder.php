<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'luan@teste.com'], 
            ['name' => 'Luan Henrique','email' => 'luan@teste.com', 'password' => '1234!']);

        User::firstOrCreate(
            ['email' => 'rosi@teste.com'], 
            ['name' => 'Rosicleia','email' => 'rosi@teste.com', 'password' => '1234!']);

    }
}

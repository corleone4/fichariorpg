<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'luan@teste.com'], 
            ['name' => 'Luan Henrique','email' => 'luan@a.com', 'password' => '123']);

    }
}

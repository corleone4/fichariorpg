<?php

namespace Database\Seeders;

use App\Models\CharacterOrigins;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OriginSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->call(CharacterOrigins::class);
    }
}

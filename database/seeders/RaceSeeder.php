<?php

namespace Database\Seeders;

use App\Models\CharacterRaces;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->call(CharacterRaces::class);
    }
}

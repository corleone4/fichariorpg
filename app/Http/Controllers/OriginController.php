<?php

namespace App\Http\Controllers;

use App\Models\CharacterOrigins;
use Illuminate\Http\Request;

class OriginController extends Controller
{
    public function create(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'modifiers' => 'required|string|max:255',
        ]);

        $origin = CharacterOrigins::create($validated);

        if ($origin):
            return redirect()->route("dashboard")->with('success', 'Origem adicionada no sistema com sucesso!');
        endif;
    }
}

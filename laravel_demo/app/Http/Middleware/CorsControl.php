<?php

namespace App\Http\Middleware;

use Closure;

class CorsControl
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $headers = ['Access-Control-Allow-Origin' => '*',
          'Access-Control-Allow-Credentials' => 'true'];
        $response = $next($request)->withHeaders($headers);
        return $response;
    }
}

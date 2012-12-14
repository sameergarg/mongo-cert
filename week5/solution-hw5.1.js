{\rtf1\ansi\ansicpg1252\cocoartf1187\cocoasubrtf340
{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red26\green26\blue26;\red246\green246\blue246;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl300

\f0\fs22 \cf2 \cb3 db.posts.aggregate([\{$unwind:"$comments"\},\{$group:\{"_id":"$comments.author","comments":\{$sum:1\}\}\},\{$sort:\{comments:-1\}\},\{$limit:1\}])}
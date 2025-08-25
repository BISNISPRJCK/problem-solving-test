<?php
function term($n)
{
  return ($n * ($n + 1)) / 2 + 1;
}

function generate($nTerms)
{
  $result = [];

  if ($nTerms <= 0) return $result;

  $current = 1;

  $result[] = $current;

  for ($i = 1; $i < $nTerms; $i++) {
    $current += $i;
    $result[] = $current;
  }

  return $result;
}


echo "Masukan jumlah suku :";
$handle = fopen("php://stdin", "r");
$line = fgets($handle);
$n = (int)trim($line);

$sequence = generate($n);

echo implode("-", $sequence) . PHP_EOL;

Info 0    [00:00:17.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Info 1    [00:00:18.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a.ts"
      },
      "seq": 1,
      "type": "request"
    }
Before request
//// [/a.ts]
class c { prop = "hello"; foo() { const x = 0; } }

//// [/b.ts]
class c { prop = "hello"; foo() { const x = 0; } }

//// [/c.ts]
class c { prop = "hello"; foo() { const x = 0; } }

//// [/tsconfig.json]
{"compilerOptions":{"plugins":[{"name":"myplugin"}]}}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


PolledWatches::

FsWatches::

FsWatchesRecursive::

Info 2    [00:00:19.000] Search path: /
Info 3    [00:00:20.000] For info: /a.ts :: Config file name: /tsconfig.json
Info 4    [00:00:21.000] Creating configuration project /tsconfig.json
Info 5    [00:00:22.000] FileWatcher:: Added:: WatchInfo: /tsconfig.json 2000 undefined Project: /tsconfig.json WatchType: Config file
Info 6    [00:00:23.000] Config: /tsconfig.json : {
 "rootNames": [
  "/a.ts",
  "/b.ts",
  "/c.ts",
  "/a/lib/lib.d.ts"
 ],
 "options": {
  "plugins": [
   {
    "name": "myplugin"
   }
  ],
  "configFilePath": "/tsconfig.json"
 }
}
Info 7    [00:00:24.000] DirectoryWatcher:: Added:: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info 8    [00:00:25.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info 9    [00:00:26.000] Enabling plugin myplugin from candidate paths: /a/lib/tsc.js/../../..
Info 10   [00:00:27.000] Loading myplugin from /a/lib/tsc.js/../../.. (resolved to /a/lib/tsc.js/../../../node_modules)
Info 11   [00:00:28.000] Plugin validation succeeded
Info 12   [00:00:29.000] FileWatcher:: Added:: WatchInfo: /b.ts 500 undefined WatchType: Closed Script info
Info 13   [00:00:30.000] FileWatcher:: Added:: WatchInfo: /c.ts 500 undefined WatchType: Closed Script info
Info 14   [00:00:31.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 15   [00:00:32.000] Starting updateGraphWorker: Project: /tsconfig.json
Info 16   [00:00:33.000] Finishing updateGraphWorker: Project: /tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 17   [00:00:34.000] Project '/tsconfig.json' (Configured)
Info 18   [00:00:35.000] 	Files (4)
	/a.ts
	/b.ts
	/c.ts
	/a/lib/lib.d.ts


	a.ts
	  Matched by default include pattern '**/*'
	b.ts
	  Matched by default include pattern '**/*'
	c.ts
	  Matched by default include pattern '**/*'
	a/lib/lib.d.ts
	  Matched by default include pattern '**/*'

Info 19   [00:00:36.000] -----------------------------------------------
Info 20   [00:00:37.000] Project '/tsconfig.json' (Configured)
Info 20   [00:00:38.000] 	Files (4)

Info 20   [00:00:39.000] -----------------------------------------------
Info 20   [00:00:40.000] Open files: 
Info 20   [00:00:41.000] 	FileName: /a.ts ProjectRootPath: undefined
Info 20   [00:00:42.000] 		Projects: /tsconfig.json
After request

PolledWatches::

FsWatches::
/tsconfig.json:
  {}
/b.ts:
  {}
/c.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/:
  {}

Info 20   [00:00:43.000] response:
    {
      "responseRequired": false
    }
Info 21   [00:00:44.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/b.ts"
      },
      "seq": 2,
      "type": "request"
    }
Before request

PolledWatches::

FsWatches::
/tsconfig.json:
  {}
/b.ts:
  {}
/c.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/:
  {}

Info 22   [00:00:45.000] FileWatcher:: Close:: WatchInfo: /b.ts 500 undefined WatchType: Closed Script info
Info 23   [00:00:46.000] Search path: /
Info 24   [00:00:47.000] For info: /b.ts :: Config file name: /tsconfig.json
Info 25   [00:00:48.000] Project '/tsconfig.json' (Configured)
Info 25   [00:00:49.000] 	Files (4)

Info 25   [00:00:50.000] -----------------------------------------------
Info 25   [00:00:51.000] Open files: 
Info 25   [00:00:52.000] 	FileName: /a.ts ProjectRootPath: undefined
Info 25   [00:00:53.000] 		Projects: /tsconfig.json
Info 25   [00:00:54.000] 	FileName: /b.ts ProjectRootPath: undefined
Info 25   [00:00:55.000] 		Projects: /tsconfig.json
After request

PolledWatches::

FsWatches::
/tsconfig.json:
  {}
/c.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/:
  {}

Info 25   [00:00:56.000] response:
    {
      "responseRequired": false
    }
Info 26   [00:00:57.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/c.ts"
      },
      "seq": 3,
      "type": "request"
    }
Before request

PolledWatches::

FsWatches::
/tsconfig.json:
  {}
/c.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/:
  {}

Info 27   [00:00:58.000] FileWatcher:: Close:: WatchInfo: /c.ts 500 undefined WatchType: Closed Script info
Info 28   [00:00:59.000] Search path: /
Info 29   [00:01:00.000] For info: /c.ts :: Config file name: /tsconfig.json
Info 30   [00:01:01.000] Project '/tsconfig.json' (Configured)
Info 30   [00:01:02.000] 	Files (4)

Info 30   [00:01:03.000] -----------------------------------------------
Info 30   [00:01:04.000] Open files: 
Info 30   [00:01:05.000] 	FileName: /a.ts ProjectRootPath: undefined
Info 30   [00:01:06.000] 		Projects: /tsconfig.json
Info 30   [00:01:07.000] 	FileName: /b.ts ProjectRootPath: undefined
Info 30   [00:01:08.000] 		Projects: /tsconfig.json
Info 30   [00:01:09.000] 	FileName: /c.ts ProjectRootPath: undefined
Info 30   [00:01:10.000] 		Projects: /tsconfig.json
After request

PolledWatches::

FsWatches::
/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/:
  {}

Info 30   [00:01:11.000] response:
    {
      "responseRequired": false
    }
Info 31   [00:01:12.000] request:
    {
      "command": "getSupportedCodeFixes",
      "seq": 4,
      "type": "request"
    }
Before request

PolledWatches::

FsWatches::
/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/:
  {}

After request

PolledWatches::

FsWatches::
/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/:
  {}

Info 32   [00:01:13.000] response:
    {
      "response": [
        "2352",
        "1375",
        "1431",
        "2345",
        "2322",
        "2678",
        "2356",
        "2362",
        "2363",
        "2736",
        "2365",
        "2367",
        "2801",
        "2461",
        "2495",
        "2802",
        "2549",
        "2548",
        "2488",
        "2504",
        "2339",
        "2349",
        "2351",
        "2304",
        "18004",
        "2612",
        "1329",
        "7051",
        "2412",
        "2375",
        "2379",
        "80004",
        "80002",
        "80006",
        "80001",
        "2713",
        "1205",
        "1371",
        "2690",
        "2420",
        "2720",
        "2552",
        "2663",
        "2662",
        "2503",
        "2686",
        "2693",
        "1361",
        "2719",
        "2530",
        "2603",
        "2344",
        "4113",
        "4112",
        "4116",
        "4114",
        "4115",
        "4119",
        "4121",
        "4120",
        "4122",
        "4111",
        "2683",
        "2459",
        "5086",
        "5087",
        "2551",
        "2568",
        "2570",
        "2833",
        "2724",
        "4117",
        "4123",
        "2769",
        "2355",
        "2741",
        "2739",
        "2740",
        "2348",
        "2307",
        "7016",
        "2515",
        "2653",
        "17009",
        "2377",
        "17004",
        "2845",
        "1378",
        "1432",
        "1312",
        "2689",
        "1451",
        "1382",
        "1381",
        "8024",
        "1272",
        "6133",
        "6196",
        "6138",
        "6192",
        "6198",
        "6199",
        "6205",
        "7027",
        "7028",
        "8020",
        "17019",
        "17020",
        "2774",
        "1308",
        "1103",
        "2311",
        "2610",
        "2611",
        "7034",
        "7005",
        "7006",
        "7019",
        "7033",
        "7010",
        "7032",
        "7008",
        "7046",
        "7043",
        "7044",
        "7047",
        "7048",
        "7050",
        "7049",
        "7045",
        "1064",
        "1002",
        "1003",
        "1005",
        "1006",
        "1007",
        "1009",
        "1010",
        "1011",
        "1012",
        "1013",
        "1014",
        "1015",
        "1016",
        "1017",
        "1018",
        "1019",
        "1020",
        "1021",
        "1022",
        "1024",
        "1025",
        "1028",
        "1029",
        "1030",
        "1031",
        "1034",
        "1035",
        "1036",
        "1038",
        "1039",
        "1040",
        "1042",
        "1044",
        "1046",
        "1047",
        "1048",
        "1049",
        "1051",
        "1052",
        "1053",
        "1054",
        "1055",
        "1056",
        "1058",
        "1059",
        "1060",
        "1061",
        "1062",
        "1063",
        "1066",
        "1068",
        "1069",
        "1070",
        "1071",
        "1079",
        "1084",
        "1085",
        "1089",
        "1090",
        "1091",
        "1092",
        "1093",
        "1094",
        "1095",
        "1096",
        "1097",
        "1098",
        "1099",
        "1100",
        "1101",
        "1102",
        "1104",
        "1105",
        "1106",
        "1107",
        "1108",
        "1109",
        "1110",
        "1113",
        "1114",
        "1115",
        "1116",
        "1117",
        "1118",
        "1119",
        "1120",
        "1121",
        "1123",
        "1124",
        "1125",
        "1126",
        "1127",
        "1128",
        "1129",
        "1130",
        "1131",
        "1132",
        "1134",
        "1135",
        "1136",
        "1137",
        "1138",
        "1139",
        "1140",
        "1141",
        "1142",
        "1144",
        "1145",
        "1146",
        "1147",
        "1148",
        "1149",
        "1155",
        "1156",
        "1157",
        "1160",
        "1161",
        "1162",
        "1163",
        "1164",
        "1165",
        "1166",
        "1168",
        "1169",
        "1170",
        "1171",
        "1172",
        "1173",
        "1174",
        "1175",
        "1176",
        "1177",
        "1178",
        "1179",
        "1180",
        "1181",
        "1182",
        "1183",
        "1184",
        "1185",
        "1186",
        "1187",
        "1188",
        "1189",
        "1190",
        "1191",
        "1192",
        "1193",
        "1194",
        "1195",
        "1196",
        "1197",
        "1198",
        "1199",
        "1200",
        "1202",
        "1203",
        "1206",
        "1207",
        "1209",
        "1210",
        "1211",
        "1212",
        "1213",
        "1214",
        "1215",
        "1216",
        "1218",
        "1221",
        "1222",
        "1223",
        "1224",
        "1225",
        "1226",
        "1227",
        "1228",
        "1229",
        "1230",
        "1231",
        "1232",
        "1233",
        "1234",
        "1235",
        "1236",
        "1237",
        "1238",
        "1239",
        "1240",
        "1241",
        "1242",
        "1243",
        "1244",
        "1245",
        "1246",
        "1247",
        "1248",
        "1249",
        "1250",
        "1251",
        "1252",
        "1254",
        "1255",
        "1257",
        "1258",
        "1259",
        "1260",
        "1261",
        "1262",
        "1263",
        "1264",
        "1265",
        "1266",
        "1267",
        "1268",
        "1269",
        "1270",
        "1271",
        "1273",
        "1274",
        "1275",
        "1276",
        "1277",
        "1278",
        "1279",
        "1280",
        "1281",
        "1282",
        "1283",
        "1284",
        "1285",
        "1286",
        "1287",
        "1288",
        "1300",
        "1309",
        "1313",
        "1314",
        "1315",
        "1316",
        "1317",
        "1318",
        "1319",
        "1320",
        "1321",
        "1322",
        "1323",
        "1324",
        "1325",
        "1326",
        "1327",
        "1328",
        "1330",
        "1331",
        "1332",
        "1333",
        "1334",
        "1335",
        "1337",
        "1338",
        "1339",
        "1340",
        "1341",
        "1343",
        "1344",
        "1345",
        "1346",
        "1347",
        "1348",
        "1349",
        "1351",
        "1352",
        "1353",
        "1354",
        "1355",
        "1356",
        "1357",
        "1358",
        "1359",
        "1360",
        "1362",
        "1363",
        "1368",
        "1379",
        "1380",
        "1385",
        "1386",
        "1387",
        "1388",
        "1389",
        "1390",
        "1392",
        "1433",
        "1434",
        "1435",
        "1436",
        "1437",
        "1438",
        "1439",
        "1440",
        "1441",
        "1442",
        "1443",
        "1444",
        "1446",
        "1448",
        "1452",
        "1453",
        "1454",
        "1455",
        "1456",
        "1470",
        "1471",
        "1472",
        "1473",
        "1474",
        "1477",
        "1478",
        "1479",
        "1484",
        "1485",
        "1486",
        "2200",
        "2201",
        "2202",
        "2203",
        "2204",
        "2205",
        "2206",
        "2207",
        "2208",
        "2209",
        "2210",
        "2300",
        "2301",
        "2302",
        "2303",
        "2305",
        "2306",
        "2308",
        "2309",
        "2310",
        "2312",
        "2313",
        "2314",
        "2315",
        "2316",
        "2317",
        "2318",
        "2319",
        "2320",
        "2321",
        "2323",
        "2324",
        "2325",
        "2326",
        "2327",
        "2328",
        "2329",
        "2330",
        "2331",
        "2332",
        "2333",
        "2334",
        "2335",
        "2336",
        "2337",
        "2338",
        "2340",
        "2341",
        "2343",
        "2346",
        "2347",
        "2350",
        "2353",
        "2354",
        "2357",
        "2358",
        "2359",
        "2364",
        "2366",
        "2368",
        "2369",
        "2370",
        "2371",
        "2372",
        "2373",
        "2374",
        "2376",
        "2378",
        "2380",
        "2383",
        "2384",
        "2385",
        "2386",
        "2387",
        "2388",
        "2389",
        "2390",
        "2391",
        "2392",
        "2393",
        "2394",
        "2395",
        "2396",
        "2397",
        "2398",
        "2399",
        "2400",
        "2401",
        "2402",
        "2403",
        "2404",
        "2405",
        "2406",
        "2407",
        "2408",
        "2409",
        "2410",
        "2411",
        "2413",
        "2414",
        "2415",
        "2416",
        "2417",
        "2418",
        "2419",
        "2422",
        "2423",
        "2425",
        "2426",
        "2427",
        "2428",
        "2430",
        "2431",
        "2432",
        "2433",
        "2434",
        "2435",
        "2436",
        "2437",
        "2438",
        "2439",
        "2440",
        "2441",
        "2442",
        "2443",
        "2444",
        "2445",
        "2446",
        "2447",
        "2448",
        "2449",
        "2450",
        "2451",
        "2452",
        "2454",
        "2456",
        "2457",
        "2458",
        "2460",
        "2462",
        "2463",
        "2464",
        "2465",
        "2466",
        "2467",
        "2468",
        "2469",
        "2472",
        "2473",
        "2474",
        "2475",
        "2476",
        "2477",
        "2478",
        "2480",
        "2481",
        "2483",
        "2484",
        "2487",
        "2489",
        "2490",
        "2491",
        "2492",
        "2493",
        "2494",
        "2496",
        "2497",
        "2498",
        "2499",
        "2500",
        "2501",
        "2502",
        "2505",
        "2506",
        "2507",
        "2508",
        "2509",
        "2510",
        "2511",
        "2512",
        "2513",
        "2514",
        "2516",
        "2517",
        "2518",
        "2519",
        "2520",
        "2522",
        "2523",
        "2524",
        "2525",
        "2526",
        "2527",
        "2528",
        "2529",
        "2531",
        "2532",
        "2533",
        "2534",
        "2536",
        "2537",
        "2538",
        "2539",
        "2540",
        "2542",
        "2543",
        "2544",
        "2545",
        "2547",
        "2550",
        "2553",
        "2554",
        "2555",
        "2556",
        "2558",
        "2559",
        "2560",
        "2561",
        "2562",
        "2563",
        "2564",
        "2565",
        "2566",
        "2567",
        "2571",
        "2574",
        "2575",
        "2576",
        "2577",
        "2578",
        "2580",
        "2581",
        "2582",
        "2583",
        "2584",
        "2585",
        "2588",
        "2589",
        "2590",
        "2591",
        "2592",
        "2593",
        "2594",
        "2595",
        "2596",
        "2597",
        "2598",
        "2602",
        "2604",
        "2606",
        "2607",
        "2608",
        "2609",
        "2613",
        "2614",
        "2615",
        "2616",
        "2617",
        "2618",
        "2619",
        "2620",
        "2621",
        "2623",
        "2624",
        "2625",
        "2626",
        "2627",
        "2628",
        "2629",
        "2630",
        "2631",
        "2632",
        "2633",
        "2634",
        "2635",
        "2636",
        "2637",
        "2638",
        "2649",
        "2651",
        "2652",
        "2657",
        "2658",
        "2659",
        "2660",
        "2661",
        "2664",
        "2665",
        "2666",
        "2667",
        "2668",
        "2669",
        "2670",
        "2671",
        "2672",
        "2673",
        "2674",
        "2675",
        "2676",
        "2677",
        "2679",
        "2680",
        "2681",
        "2684",
        "2685",
        "2687",
        "2688",
        "2692",
        "2694",
        "2695",
        "2696",
        "2697",
        "2698",
        "2699",
        "2700",
        "2701",
        "2702",
        "2703",
        "2704",
        "2705",
        "2706",
        "2707",
        "2708",
        "2709",
        "2710",
        "2711",
        "2712",
        "2714",
        "2715",
        "2716",
        "2717",
        "2718",
        "2721",
        "2722",
        "2723",
        "2725",
        "2726",
        "2727",
        "2729",
        "2730",
        "2731",
        "2732",
        "2733",
        "2734",
        "2735",
        "2737",
        "2742",
        "2743",
        "2744",
        "2745",
        "2746",
        "2747",
        "2748",
        "2749",
        "2750",
        "2751",
        "2752",
        "2753",
        "2754",
        "2755",
        "2756",
        "2757",
        "2758",
        "2759",
        "2760",
        "2761",
        "2762",
        "2763",
        "2764",
        "2765",
        "2766",
        "2767",
        "2768",
        "2770",
        "2771",
        "2772",
        "2773",
        "2775",
        "2776",
        "2777",
        "2778",
        "2779",
        "2780",
        "2781",
        "2783",
        "2784",
        "2785",
        "2786",
        "2787",
        "2788",
        "2789",
        "2790",
        "2791",
        "2792",
        "2793",
        "2794",
        "2795",
        "2796",
        "2797",
        "2798",
        "2799",
        "2800",
        "2803",
        "2804",
        "2806",
        "2807",
        "2808",
        "2809",
        "2810",
        "2811",
        "2812",
        "2813",
        "2814",
        "2815",
        "2816",
        "2817",
        "2818",
        "2819",
        "2820",
        "2821",
        "2822",
        "2834",
        "2835",
        "2836",
        "2837",
        "2838",
        "2839",
        "2840",
        "2841",
        "2842",
        "2843",
        "2844",
        "2846",
        "4000",
        "4002",
        "4004",
        "4006",
        "4008",
        "4010",
        "4012",
        "4014",
        "4016",
        "4019",
        "4020",
        "4021",
        "4022",
        "4023",
        "4024",
        "4025",
        "4026",
        "4027",
        "4028",
        "4029",
        "4030",
        "4031",
        "4032",
        "4033",
        "4034",
        "4035",
        "4036",
        "4037",
        "4038",
        "4039",
        "4040",
        "4041",
        "4042",
        "4043",
        "4044",
        "4045",
        "4046",
        "4047",
        "4048",
        "4049",
        "4050",
        "4051",
        "4052",
        "4053",
        "4054",
        "4055",
        "4056",
        "4057",
        "4058",
        "4059",
        "4060",
        "4061",
        "4062",
        "4063",
        "4064",
        "4065",
        "4066",
        "4067",
        "4068",
        "4069",
        "4070",
        "4071",
        "4072",
        "4073",
        "4074",
        "4075",
        "4076",
        "4077",
        "4078",
        "4081",
        "4082",
        "4083",
        "4084",
        "4085",
        "4090",
        "4091",
        "4092",
        "4094",
        "4095",
        "4096",
        "4097",
        "4098",
        "4099",
        "4100",
        "4101",
        "4102",
        "4103",
        "4104",
        "4105",
        "4106",
        "4107",
        "4108",
        "4109",
        "4110",
        "4118",
        "4124",
        "4125",
        "5001",
        "5009",
        "5010",
        "5012",
        "5014",
        "5023",
        "5024",
        "5025",
        "5033",
        "5042",
        "5047",
        "5048",
        "5051",
        "5052",
        "5053",
        "5054",
        "5055",
        "5056",
        "5057",
        "5058",
        "5059",
        "5061",
        "5062",
        "5063",
        "5064",
        "5065",
        "5066",
        "5067",
        "5068",
        "5069",
        "5070",
        "5071",
        "5072",
        "5073",
        "5074",
        "5075",
        "5076",
        "5077",
        "5078",
        "5079",
        "5080",
        "5081",
        "5082",
        "5083",
        "5084",
        "5085",
        "5088",
        "5089",
        "5090",
        "5091",
        "5092",
        "5093",
        "5094",
        "5095",
        "5096",
        "5097",
        "5098",
        "5099",
        "5100",
        "5101",
        "5102",
        "5103",
        "5104",
        "5105",
        "6044",
        "6045",
        "6046",
        "6048",
        "6050",
        "6051",
        "6053",
        "6054",
        "6059",
        "6064",
        "6082",
        "6114",
        "6131",
        "6137",
        "6140",
        "6142",
        "6188",
        "6189",
        "6200",
        "6202",
        "6229",
        "6230",
        "6231",
        "6232",
        "6233",
        "6234",
        "6236",
        "6238",
        "6258",
        "6263",
        "6304",
        "6305",
        "6306",
        "6307",
        "6308",
        "6309",
        "6310",
        "6369",
        "6370",
        "6377",
        "6379",
        "6504",
        "6931",
        "7009",
        "7011",
        "7012",
        "7013",
        "7014",
        "7015",
        "7017",
        "7018",
        "7020",
        "7022",
        "7023",
        "7024",
        "7025",
        "7026",
        "7029",
        "7030",
        "7031",
        "7035",
        "7036",
        "7039",
        "7040",
        "7041",
        "7042",
        "7052",
        "7053",
        "7054",
        "7055",
        "7056",
        "7057",
        "7058",
        "7059",
        "7060",
        "7061",
        "8000",
        "8001",
        "8002",
        "8003",
        "8004",
        "8005",
        "8006",
        "8008",
        "8009",
        "8010",
        "8011",
        "8012",
        "8013",
        "8016",
        "8017",
        "8018",
        "8021",
        "8022",
        "8023",
        "8025",
        "8026",
        "8027",
        "8028",
        "8029",
        "8030",
        "8031",
        "8032",
        "8033",
        "8034",
        "8035",
        "8036",
        "8037",
        "8038",
        "9005",
        "9006",
        "17000",
        "17001",
        "17002",
        "17005",
        "17006",
        "17007",
        "17008",
        "17010",
        "17011",
        "17012",
        "17013",
        "17014",
        "17015",
        "17016",
        "17017",
        "17018",
        "18000",
        "18002",
        "18003",
        "18006",
        "18007",
        "18009",
        "18010",
        "18011",
        "18012",
        "18013",
        "18014",
        "18015",
        "18016",
        "18017",
        "18018",
        "18019",
        "18024",
        "18026",
        "18027",
        "18028",
        "18029",
        "18030",
        "18031",
        "18032",
        "18033",
        "18035",
        "18036",
        "18037",
        "18038",
        "18039",
        "18041",
        "18042",
        "18043",
        "18045",
        "18046",
        "18047",
        "18048",
        "18049",
        "18050",
        "18051",
        "80005",
        "80003",
        "80008",
        "80007"
      ],
      "responseRequired": true
    }
Info 33   [00:01:14.000] request:
    {
      "command": "getSupportedCodeFixes",
      "arguments": {
        "file": "/a.ts"
      },
      "seq": 5,
      "type": "request"
    }
Before request

PolledWatches::

FsWatches::
/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/:
  {}

After request

PolledWatches::

FsWatches::
/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/:
  {}

Info 34   [00:01:15.000] response:
    {
      "response": [
        "a"
      ],
      "responseRequired": true
    }
Info 35   [00:01:16.000] request:
    {
      "command": "getSupportedCodeFixes",
      "arguments": {
        "file": "/b.ts"
      },
      "seq": 6,
      "type": "request"
    }
Before request

PolledWatches::

FsWatches::
/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/:
  {}

After request

PolledWatches::

FsWatches::
/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/:
  {}

Info 36   [00:01:17.000] response:
    {
      "response": [
        "b"
      ],
      "responseRequired": true
    }
Info 37   [00:01:18.000] request:
    {
      "command": "getSupportedCodeFixes",
      "arguments": {
        "file": "/c.ts"
      },
      "seq": 7,
      "type": "request"
    }
Before request

PolledWatches::

FsWatches::
/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/:
  {}

After request

PolledWatches::

FsWatches::
/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/:
  {}

Info 38   [00:01:19.000] response:
    {
      "response": [
        "2352"
      ],
      "responseRequired": true
    }
Info 39   [00:01:20.000] request:
    {
      "command": "getSupportedCodeFixes",
      "arguments": {
        "projectFileName": "/tsconfig.json"
      },
      "seq": 8,
      "type": "request"
    }
Before request

PolledWatches::

FsWatches::
/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/:
  {}

After request

PolledWatches::

FsWatches::
/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/:
  {}

Info 40   [00:01:21.000] response:
    {
      "response": [
        "2352"
      ],
      "responseRequired": true
    }
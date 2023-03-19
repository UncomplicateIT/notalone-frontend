import {
  ArrowRight,
  ClipboardList,
  ClipboardSignature,
  FilePieChart,
  Laptop,
  LucideProps,
  Mic,
  Moon,
  Scroll,
  SunMedium,
  Volume2,
  type Icon as LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  arrowRight: ArrowRight,
  volume: Volume2,
  mic: Mic,
  clipboardList: ClipboardList,
  clipboardSignature: ClipboardSignature,
  filePieChart: FilePieChart,
  scroll: Scroll,
  funUnderline: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 69.24294 15.80886"
      {...props}
    >
      <path
        d="M.72389,3.45029c17.61435-.50658,35.2287-1.01317,52.84305-1.51975,4.98519-.14337,9.97039-.28675,14.95558-.43012V.00042c-8.83186,1.05581-17.60382,2.57091-26.27205,4.56741-2.14332,.49366-4.28,1.01594-6.40953,1.56607-1.05269,.27195-2.3153,.4399-3.31391,.88073-.47489,.20964-.80211,.47908-.87434,1.02-.22804,1.70781,2.20153,1.4773,3.2296,1.62674,2.13816,.31081,4.23336,.83088,6.28557,1.50243v-1.44642c-.84494,.27522-1.68989,.55043-2.53483,.82565-.7163,.23331-1.57267,.40129-2.17822,.87126-.8292,.64353-1.1137,1.77347-.7637,2.75392,.48969,1.37179,1.74578,1.58515,3.03827,1.63982,.96521,.04083,.96329-1.45925,0-1.5-.75909-.03211-2.2427-.31661-1.57179-1.47157,.2364-.40695,.83243-.50768,1.24556-.64225,1.05449-.34347,2.10898-.68694,3.16347-1.03041,.71208-.23194,.71158-1.21357,0-1.44642-1.76105-.57628-3.55254-1.04253-5.37931-1.35788-.74353-.12835-1.49145-.23301-2.24113-.31823-.22714-.02681-.45459-.05069-.68236-.07164-.00609,.352,.11775,.45162,.37153,.29887,.31074,.05651,.85683-.23004,1.18326-.31646,3.6997-.97938,7.42191-1.87372,11.16291-2.68113,7.45025-1.60796,14.97319-2.8658,22.541-3.77049,.93069-.11126,.98999-1.52847,0-1.5C50.90816,.50701,33.29381,1.01359,15.67947,1.52018c-4.98519,.14337-9.97039,.28675-14.95558,.43012-.96319,.0277-.96718,1.52782,0,1.5H.72389Z"
        fill="currentColor"
      />
    </svg>
  ),
  funArrow: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 62.63443 48.83955"
      {...props}
    >
      <path
        d="M44.98697,17.27072c3.02152-4.51246,6.04304-9.02491,9.06455-13.53737h-4.31735c2.40533,3.96877,4.81066,7.93755,7.216,11.90632,.34353,.56682,.68706,1.13365,1.03059,1.70047,.69922,1.15371,2.24206,1.58614,3.42047,.89688,1.15413-.67506,1.59935-2.2614,.89688-3.42047-2.40533-3.96877-4.81066-7.93755-7.216-11.90632-.34353-.56682-.68706-1.13365-1.03059-1.70047-1.01399-1.67307-3.27826-1.55182-4.31735,0-3.02152,4.51246-6.04304,9.02491-9.06455,13.53737-.75151,1.12234-.21797,2.7684,.89688,3.42047,1.22766,.71806,2.66719,.22811,3.42047-.89688h0Z"
        fill="currentColor"
      />
      <path
        d="M2.5,48.54032c9.98476-1.10812,19.23175-7.01358,24.027-15.93333,2.57961-4.79839,4.1285-11.12074,1.05639-16.08048-2.76184-4.45884-8.78327-6.86452-13.37808-3.572-4.65048,3.33241-5.40732,9.23623-4.16926,14.46374,.63378,2.67602,1.65266,5.29118,2.6765,7.83978,.92629,2.30578,1.9356,4.61149,3.35298,6.66419,2.95718,4.2827,7.44023,7.17352,12.79181,6.89937,5.40109-.27669,10.27355-3.15896,13.66494-7.28503,3.97582-4.83709,6.41813-10.83763,8.35242-16.73667,2.1236-6.47637,3.3803-13.21153,3.88983-20.00421,.10112-1.34804-1.2214-2.5-2.5-2.5-1.43699,0-2.39859,1.14808-2.5,2.5-.72105,9.61263-3.11196,19.4488-7.5363,28.05291-1.94694,3.78626-4.50102,7.445-8.33595,9.50003-3.33345,1.78631-7.49538,2.16839-10.71346-.0623-3.04595-2.11138-4.69295-5.8781-5.98461-9.22046-1.50713-3.89995-3.7081-8.6514-2.34844-12.87282,1.02202-3.17312,4.20143-5.00393,7.04753-2.69742,3.32838,2.69736,2.63287,7.49083,1.10972,10.98162-3.53242,8.09567-11.73046,14.08948-20.50302,15.06307-1.3418,.14892-2.5,1.04242-2.5,2.5,0,1.23594,1.14939,2.64989,2.5,2.5h0Z"
        fill="currentColor"
      />
    </svg>
  ),
  underline: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59.60015 7.31033"
      {...props}
    >
      <path
        d="M1.41762,3.64168c1.13583-1.76304,3.03908-1.92354,4.96524-2.02096,2.14977-.10873,4.30727,.00568,6.44273,.26458,4.35837,.52841,8.62128,1.66201,12.86946,2.73423,7.30208,1.84301,14.86499,3.57939,22.40788,2.18418,4.13926-.76564,7.92287-2.54542,11.23592-5.1262,.76069-.59256-.30764-1.64724-1.06066-1.06066-6.42411,5.00422-14.45878,5.88987-22.30444,4.70255C27.55686,4.04565,19.51001,.86969,10.98699,.20036,7.40444-.08098,2.35565-.58184,.12241,2.8846c-.52434,.81389,.77355,1.56679,1.29521,.75708h0Z"
        fill="currentColor"
      />
    </svg>
  ),
  star: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36.92975 35.48124"
      {...props}
    >
      <path
        d="M18.48495,27.98802c-3.99229,1.67671-7.10339,5.38475-11.50776,6.03479l.92259,.92259c.36799-2.4042,.73597-4.80841,1.10396-7.21261,.17076-1.11565,.40244-2.24251,.51518-3.36589,.07221-.71955-.15735-1.05104-.54946-1.68849-2.04651-3.32698-4.73382-6.17444-7.86842-8.49467l-.37854,1.3976c2.18136-.0461,4.35436-.28827,6.48568-.76031,1.03157-.22847,2.0518-.50936,3.05482-.8415,.78546-.2601,1.84682-.48246,2.48879-1.01908,.56414-.47157,.72931-1.29626,.9944-1.94978l1.30082-3.20695L17.83447,.93166l-1.37081,.17916c2.44629,3.31272,4.43664,6.91554,5.90237,10.76534,.24082,.63251,1.27474,.78873,1.44642,0l.06286-.28881-.72321,.55062,13.02955,1.50949-.53033-1.28033c-1.71654,1.80345-3.43307,3.60691-5.14961,5.41036-.80105,.84161-1.6021,1.68322-2.40315,2.52484-.42299,.44441-1.06765,.91613-1.25005,1.52518-.2549,.85112-.06333,2.15516-.03189,3.03054,.03953,1.10068,.12832,2.19921,.26291,3.2923,.27801,2.25794,.75247,4.47424,1.40856,6.65228l.92259-.92259c-1.96753-.6587-3.86229-1.48808-5.66627-2.51482-1.46236-.83231-3.47557-1.85673-4.52975-3.18432-.60005-.75568-1.65513,.31201-1.06066,1.06066,.49369,.62173,1.317,1.11026,1.96059,1.57405,.92372,.66565,1.88322,1.28163,2.87274,1.84482,1.91406,1.0894,3.9374,1.96727,6.02459,2.66604,.54178,.18138,1.08195-.39355,.92259-.92259-.61617-2.04549-1.08959-4.13225-1.35498-6.25352-.11718-.93658-.19674-1.87805-.24301-2.82075-.04186-.85295-.27528-2.18583-.02924-2.9952,.19085-.62782,1.39679-1.54385,1.88186-2.05348,.68661-.72138,1.37323-1.44276,2.05984-2.16415,1.48766-1.56299,2.97533-3.12599,4.46299-4.68898,.484-.50851,.09672-1.20769-.53033-1.28033l-13.02955-1.50949c-.30773-.03565-.65931,.25707-.72321,.55062l-.06286,.28881h1.44642c-1.51305-3.97407-3.52676-7.70187-6.05358-11.12365-.40319-.54599-1.11981-.43964-1.37081,.17916l-2.41581,5.95577-1.11499,2.74882c-.2635,.64961-.57103,2.08725-1.06229,2.55828-.47727,.45761-1.75069,.68407-2.36165,.87654-.86366,.27207-1.73966,.50712-2.6239,.7023-2.00493,.44256-4.03552,.66337-6.08692,.70673-.79445,.01679-.95352,.972-.37854,1.3976,2.92092,2.16205,5.42524,4.85952,7.3303,7.95654,.11376,.18494,.43731,.61221,.4102,.47542,.07598,.38348-.17263,1.10699-.23275,1.49975-.14719,.96168-.29439,1.92336-.44158,2.88505-.31892,2.08364-.63784,4.16729-.95677,6.25093-.09212,.60184,.32347,1.01101,.92259,.92259,4.47328-.66021,7.48272-4.34433,11.50776-6.03479,.87667-.36819,.49153-1.82033-.39876-1.44642Z"
        fill="currentColor"
      />
    </svg>
  ),
  rocket: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 46.74479 55.18999"
      {...props}
    >
      <g>
        <path
          d="M25.21414,41.95628c6.36189-9.71435,12.72379-19.42871,19.08568-29.14306,1.38953-2.12176,2.54428-3.91138,2.43819-6.51288-.05289-1.29705,.08743-2.62068-.21119-3.8987-.67963-2.90864-3.71388-2.61704-6.01774-1.9837-.98061,.26957-2.0259,.43747-2.93569,.90621-.95341,.49121-1.75586,1.2544-2.4908,2.02251-1.92728,2.01427-3.7985,4.08446-5.70867,6.11523-3.89371,4.13953-7.81605,8.252-11.71923,12.38258-2.00782,2.1248-4.01062,4.25436-6.00185,6.39471-1.05901,1.13831-2.04832,2.00755-3.37044,2.83026-1.03607,.64471-2.24051,1.21823-3.14165,2.04845-2.73834,2.52281,2.41555,5.40515,4.12856,6.76566,3.13138,2.48702,6.26932,4.9658,9.39644,7.45818,1.06937,.85231,2.7061,2.72013,4.20547,1.95621,.96874-.49357,1.10256-1.76542,1.31249-2.70022,.16097-.71677,.32194-1.43354,.48291-2.15031,.08943-.39821,.17886-.79641,.26828-1.19462,.05449-.24265,.08783-1.04979,.16195-1.14471,.5873-.75217-.46692-1.82107-1.06066-1.06066-.49225,.63043-.53669,1.75754-.70868,2.52338-.26463,1.17835-.36749,2.63056-.84317,3.73819-.38398,.8941-.69843,.58217-1.27089,.16117-.20433-.15027-.39828-.3196-.59632-.47806-.49665-.39737-.99416-.79368-1.49186-1.18975-2.48833-1.98023-4.98211-3.95361-7.47336-5.93017-1.14643-.90958-2.29274-1.81931-3.43687-2.73177-.38661-.30832-.77428-.61544-1.1587-.9265-.2598-.21023-.58311-.40653-.78653-.67135-.59758-.77795-.20305-1.29362,.49007-1.75941,1.01083-.67929,2.07452-1.2909,3.10854-1.93434,1.08119-.67279,1.8111-1.43685,2.67915-2.37051,1.71415-1.84372,3.43705-3.67926,5.16447-5.51054,3.39813-3.60243,6.81395-7.18812,10.21572-10.78711,1.72912-1.82937,3.4547-3.6621,5.17242-5.50218,1.51065-1.61826,2.99236-3.71636,4.9088-4.87798,.84428-.51174,1.94793-.67467,2.89885-.93613,.76395-.21005,1.55591-.40328,2.35262-.40658,1.0028-.00414,1.59231,.35178,1.81994,1.34262,.25176,1.09587,.12559,2.26096,.15684,3.37466,.03475,1.23842-.04378,2.18694-.63161,3.32305-.57352,1.10845-1.32454,2.13586-2.00709,3.1781-6.22653,9.50767-12.45307,19.01533-18.6796,28.523-.53041,.80991,.76786,1.56232,1.29521,.75708Z"
          fill="currentColor"
        />
        <path
          d="M20.3798,18.52696c-4.18141,.14043-8.36283,.28086-12.54424,.42129-1.70775,.05735-3.49169,.0426-4.94653,1.06985-1.25573,.88666-2.05482,2.24559-2.79171,3.56014-.14672,.26173-.14273,.70431,.11727,.90887,2.69652,2.12149,5.39305,4.24298,8.08957,6.36447,.75046,.59042,1.8191-.46395,1.06066-1.06066-2.69652-2.12149-5.39305-4.24298-8.08957-6.36447l.11727,.90887c.69306-1.23637,1.44474-2.64621,2.7482-3.33404,1.51412-.79899,3.60313-.54995,5.26286-.60569,3.65874-.12288,7.31747-.24575,10.97621-.36863,.9627-.03233,.96709-1.53248,0-1.5h0Z"
          fill="currentColor"
        />
        <path
          d="M32.13041,29.07033c.74056,3.4515,1.48112,6.90301,2.22168,10.35451,.34745,1.61936,1.03194,3.49244,.84979,5.15906-.18027,1.64938-1.52055,2.86833-2.65754,3.94039h1.06066c-2.71205-2.10161-5.42409-4.20322-8.13614-6.30483-.75385-.58417-1.82302,.46989-1.06066,1.06066,2.71205,2.10161,5.42409,4.20322,8.13614,6.30483,.32797,.25415,.73506,.30701,1.06066,0,1.15699-1.09092,2.34822-2.26931,2.86289-3.81576,.56805-1.70685,.02221-3.51982-.34024-5.2091-.85027-3.96284-1.70054-7.92567-2.55082-11.88851-.20241-.94335-1.64873-.54414-1.44642,.39876h0Z"
          fill="currentColor"
        />
        <path
          d="M12.42527,42.37462c-2.56363,.35952-5.34844,.91472-6.89871,3.21414-.78338,1.16194-.861,2.60914-1.0499,3.95551-.21931,1.56312-.43861,3.12625-.65792,4.68937-.07501,.53462,.31749,1.10178,.92259,.92259,1.53899-.45575,3.14827-.19617,4.72588-.29259,1.53584-.09386,3.03716-.56541,4.07437-1.76024,2.34828-2.70515,1.60198-6.368,.75793-9.50988-.25019-.93129-1.69758-.53614-1.44642,.39876,.70514,2.6248,1.61056,6.09384-.59633,8.29002-.9892,.9844-2.37864,1.10316-3.70295,1.10537-1.41432,.00236-2.83715-.08479-4.21124,.32213l.92259,.92259c.19381-1.38136,.38761-2.76273,.58142-4.14409,.17405-1.24059,.17447-2.74244,.79938-3.8571,1.20182-2.14373,3.98705-2.5029,6.17807-2.81016,.40421-.05669,.61741-.56758,.52383-.92259-.11413-.43297-.52337-.57981-.92259-.52383h0Z"
          fill="currentColor"
        />
      </g>
      <path
        d="M37.21253,9.43986c.31833,.03122,.63818,.0532,.95537,.09499l-.19938-.02679c.13668,.01854,.27545,.04058,.40379,.09319l-.17916-.07561c.04808,.02055,.09316,.04552,.1349,.07709l-.15179-.11727c.03736,.02939,.07013,.06282,.09961,.10008l-.11727-.15179c.05923,.07741,.10191,.16517,.13992,.25451l-.07561-.17916c.10754,.25703,.1883,.52545,.28075,.78809,.06551,.18609,.1703,.34619,.34467,.44822,.16076,.09408,.39769,.13393,.57792,.07561,.36462-.11799,.6633-.52637,.52383-.92259-.07734-.2197-.14855-.44176-.23016-.65993-.07039-.18816-.14065-.38897-.25971-.55345-.1857-.25654-.39893-.41908-.69429-.53233-.20335-.07798-.4282-.09683-.64202-.12354-.30281-.03782-.60771-.05954-.91137-.08932-.1802-.01767-.40707,.09641-.53033,.21967-.13008,.13008-.22804,.3435-.21967,.53033,.00869,.19397,.0724,.39514,.21967,.53033,.15454,.14186,.32196,.19923,.53033,.21967h0Z"
        fill="currentColor"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
};

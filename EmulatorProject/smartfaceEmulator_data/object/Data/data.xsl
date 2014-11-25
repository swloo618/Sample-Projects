<?xml version="1.0" ?>
<SMARTFACEPROJECT xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="SmartfaceProjectPlayerUpdated.xsd">
<PROJECT SID="-1" WS="http://www.smartface.biz" dateLastResourceUpdated="010101000000" AppID="0" AppName="Smartface Demo" CID="0" Ver="1.0.0" ScreenW="640" ScreenH="1136" Dpi="326" FacebookAppUID="" FacebookAppSecret="" TwitterConsumerKey="" TwitterConsumerSecret="">
	<MAPAPI AndroidMapKey="" IosGeocodingKey="" />
	<ADMOB AdMobPublisherId="" AdMobTestUsage="0" />
	<DEVICEORIENTATIONS DeviceOrientationPortrait="1" DeviceOrientationUpsideDown="0" DeviceOrientationLandscapeLeft="0" DeviceOrientationLandscapeRight="0" />
	<ANDROIDPRODUCTKEY AndroidProductKey="" />
	<ANDROIDSENDERID AndroidSenderID="" />
	<APPLICATIONCACHESIZE ApplicationCacheSize="50" />
	<APPLICATIONNAME ApplicationName="smartface demo" />
	<NAVIGATIONBARUPDATE NavigationBarUpdate="1" />
	<RESOURCES>
	</RESOURCES>
	<FLURRYANALYTICS Enb="0" IOSAppID="" AndroidAppID="" LogUserInfoStatistics="1" LogApplicationUsageDurations="1" LogNetworkUsage="0" LogApplicationStartEvents="0" LogAudioPlayDurations="0" LogVideoPlayDurations="0" LogShowPageActions="0" LogCallActions="0" LogSendSMSActions="0">
		<DATA>
			<PRM Nm="Val1" Val="" />
			<PRM Nm="Val2" Val="" />
			<PRM Nm="Val3" Val="" />
		</DATA>
	</FLURRYANALYTICS>
	<LOGGING LogServerUrl="" MaxLogSize="30" LogError="0" LogWarning="0" LogDebug="0">
	</LOGGING>
	<SESANALYTICS SESAPIKey="SES.8obinex.anaLYt1cs201e" SESAPIURL="http://analytics.smartface.io/api/AnalyticsData/" />
	<DATATABLES>
		<TABLE ID="D59199CE-C5A1-4055-92B6-37478BF8137A" Name="tblGuides" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="guidesRow" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="guidesRowLink" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="74FDDDE6-E821-490B-9C6A-A6CC79026AD8" Name="tblQnA" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="qnaRow" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="qnaRowLink" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="15A1A951-F43C-4D1A-AF01-DEDBFDBE8BCD" Name="tblTest" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="test_info" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="FA48F3CC-588D-418F-9E44-F5D20DBC14DE" Name="tblTipsNTricks" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="tipsntricksRow" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="tipsntricksRowLink" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
	</DATATABLES>
	<DATASETS>
		<DATASET ID="BF8783A3-B48A-42A5-9D1B-88B363D45A1F" Name="DS_Guides" TableID="D59199CE-C5A1-4055-92B6-37478BF8137A" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "tblGuides"."guidesRow", "tblGuides"."guidesRowLink" FROM "tblGuides"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="tblGuides.guidesRow" />
				<COLUMN ID="2" Name="tblGuides.guidesRowLink" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="453B3EED-C24D-44EA-8E45-2F4CBA2A763B" Name="DS_QnA" TableID="74FDDDE6-E821-490B-9C6A-A6CC79026AD8" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "tblQnA"."qnaRow", "tblQnA"."qnaRowLink" FROM "tblQnA"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="tblQnA.qnaRow" />
				<COLUMN ID="2" Name="tblQnA.qnaRowLink" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="96907041-7DA4-4081-8D23-63659B813580" Name="DS_Test" TableID="15A1A951-F43C-4D1A-AF01-DEDBFDBE8BCD" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "tblTest"."test_info" FROM "tblTest"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="tblTest.test_info" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="46D7AAF7-E40A-47B3-B40C-E86BFCC2BBB5" Name="DS_TipsTricks" TableID="FA48F3CC-588D-418F-9E44-F5D20DBC14DE" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "tblTipsNTricks"."tipsntricksRow", "tblTipsNTricks"."tipsntricksRowLink" FROM "tblTipsNTricks"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="tblTipsNTricks.tipsntricksRow" />
				<COLUMN ID="2" Name="tblTipsNTricks.tipsntricksRowLink" />
			</COLUMNS>
		</DATASET>
	</DATASETS>
	<GLOBALEVENTS>
		<ONSTART script="Global_Events_OnStart(e);" />
		<ONERROR script="Global_Events_OnError(e);" />
	</GLOBALEVENTS>
</PROJECT>
</SMARTFACEPROJECT>